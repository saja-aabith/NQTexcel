import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./WorldMap.css";

function WorldMap({ compact = false }) {
  const [worlds, setWorlds] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fixed positions (SVG viewBox 1000x600)
  const worldPositions = useMemo(
    () => [
      { x: 8, y: 75 }, // World 1
      { x: 18, y: 65 }, // World 2
      { x: 28, y: 58 }, // World 3
      { x: 38, y: 50 }, // World 4
      { x: 48, y: 45 }, // World 5
      { x: 58, y: 42 }, // World 6
      { x: 68, y: 38 }, // World 7
      { x: 78, y: 32 }, // World 8
      { x: 88, y: 25 }, // World 9
      { x: 95, y: 18 }, // World 10
    ],
    []
  );

  useEffect(() => {
    if (!compact) fetchWorldsData();
    else setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compact]);

  const fetchWorldsData = async () => {
    try {
      const response = await axios.get("/worlds");
      setWorlds(response.data.worlds || []);
    } catch (error) {
      console.error("Error fetching worlds:", error);
    } finally {
      setLoading(false);
    }
  };

  const getWorldSection = (worldNum) => (worldNum <= 5 ? "VERBAL" : "MATH");
  const getWorldTheme = (worldNum) => (worldNum <= 5 ? "verbal" : "math");

  const getWorldStatus = (worldNum) => {
    if (compact) return worldNum === 1 ? "current" : "locked";

    const world = worlds.find((w) => w.world === worldNum);
    if (!world) return "locked";

    const completedCount = world.levels.filter((l) => l.is_completed).length;
    if (completedCount === 10) return "completed";
    if (completedCount > 0 || worldNum === 1) return "current";

    const prevWorld = worlds.find((w) => w.world === worldNum - 1);
    if (prevWorld && prevWorld.levels.filter((l) => l.is_completed).length === 10) {
      return "current";
    }

    return "locked";
  };

  const getCompletionPercentage = (worldNum) => {
    if (compact) return 0;
    const world = worlds.find((w) => w.world === worldNum);
    if (!world) return 0;
    const completed = world.levels.filter((l) => l.is_completed).length;
    return (completed / 10) * 100;
  };

  const getCompletedLevels = (worldNum) => {
    if (compact) return 0;
    const world = worlds.find((w) => w.world === worldNum);
    if (!world) return 0;
    return world.levels.filter((l) => l.is_completed).length;
  };

  const handleWorldClick = (worldNum) => {
    if (compact) return;
    const status = getWorldStatus(worldNum);
    if (status !== "locked") {
      const element = document.getElementById(`world-${worldNum}`);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Smooth path through points
  const generatePath = () => {
    const points = worldPositions.map((pos) => `${pos.x * 10},${pos.y * 6}`);
    let path = `M ${points[0]}`;

    for (let i = 1; i < points.length; i++) {
      const [x1, y1] = points[i - 1].split(",").map(Number);
      const [x2, y2] = points[i].split(",").map(Number);

      const cx = x1 + (x2 - x1) / 2;
      const cy = y1 + (y2 - y1) / 2;

      path += ` Q ${cx},${cy} ${x2},${y2}`;
    }

    return path;
  };

  // Constellation polyline points (straight segments)
  const constellationPoints = useMemo(() => {
    return worldPositions.map((p) => `${p.x * 10},${p.y * 6}`).join(" ");
  }, [worldPositions]);

  // Particles (CSS-only animation; deterministic via memo)
  const particles = useMemo(() => {
    const count = compact ? 18 : 44;
    const arr = [];
    for (let i = 0; i < count; i++) {
      // pseudo-random but stable
      const seed = (i * 9301 + 49297) % 233280;
      const r1 = (seed / 233280) * 100;
      const r2 = (((seed * 7) % 233280) / 233280) * 100;
      const r3 = (((seed * 13) % 233280) / 233280);

      const size = 1 + Math.round(r3 * 3); // 1..4
      const dur = 10 + Math.round(((seed * 17) % 233280) / 233280 * 18); // 10..28
      const delay = -Math.round(((seed * 19) % 233280) / 233280 * 30); // negative start
      const drift = 24 + Math.round(((seed * 23) % 233280) / 233280 * 80); // px

      arr.push({
        id: i,
        left: r1,
        top: r2,
        size,
        dur,
        delay,
        drift,
        alpha: 0.35 + (((seed * 29) % 233280) / 233280) * 0.55,
      });
    }
    return arr;
  }, [compact]);

  if (loading && !compact) {
    return (
      <div className="world-map-loading">
        <div className="loading-spinner"></div>
        <p>Loading your journey...</p>
      </div>
    );
  }

  const worldsCompleted = compact
    ? 0
    : worlds.filter((w) => w.levels.filter((l) => l.is_completed).length === 10).length;

  const levelsCompleted = compact
    ? 0
    : worlds.reduce((acc, w) => acc + w.levels.filter((l) => l.is_completed).length, 0);

  return (
    <div className={`neo-world-map ${compact ? "compact" : ""}`}>
      {!compact && (
        <div className="map-header">
          <div className="map-title-section">
            <h2>Your Learning Journey</h2>
            <p>Complete each world at 100% to unlock the next</p>
          </div>

          <div className="map-stats">
            <div className="stat-item">
              <span className="stat-number">{worldsCompleted}</span>
              <span className="stat-label">Worlds Completed</span>
            </div>

            <div className="stat-item">
              <span className="stat-number">{levelsCompleted}</span>
              <span className="stat-label">Levels Completed</span>
            </div>
          </div>
        </div>
      )}

      <div className="map-canvas">
        {/* bright space layers */}
        <div className="nebula-layer" />
        <div className="stars-layer stars-1" />
        <div className="stars-layer stars-2" />
        <div className="stars-layer stars-3" />

        {/* NEW: particle field */}
        <div className="particles-layer" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.alpha,
                "--p-dur": `${p.dur}s`,
                "--p-delay": `${p.delay}s`,
                "--p-drift": `${p.drift}px`,
              }}
            />
          ))}
        </div>

        {/* subtle moving streaks */}
        <div className="streaks-layer" />

        {/* scanlines + film grain */}
        <div className="scanline-layer" />
        <div className="noise-layer" />

        {/* Curved path */}
        <svg className="path-svg" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#A78BFA" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="pathGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
              <stop offset="45%" stopColor="#A78BFA" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.35" />
            </linearGradient>

            <filter id="glowStrong">
              <feGaussianBlur stdDeviation="7" result="blur1" />
              <feGaussianBlur stdDeviation="2" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="softGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* background path */}
          <path
            d={generatePath()}
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="10"
            strokeLinecap="round"
            className="path-background"
          />

          {/* wide glow */}
          <path
            d={generatePath()}
            fill="none"
            stroke="url(#pathGlowGradient)"
            strokeWidth="18"
            strokeLinecap="round"
            filter="url(#glowStrong)"
            className="path-glow"
          />

          {/* main path */}
          <path
            d={generatePath()}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            filter="url(#softGlow)"
            className="main-path"
          />

          {/* moving highlight dash */}
          <path
            d={generatePath()}
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="path-spark"
          />
        </svg>

        {/* NEW: constellation overlay */}
        {!compact && (
          <svg className="constellation-svg" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
            <polyline className="constellation-line" points={constellationPoints} />
            <polyline className="constellation-glow" points={constellationPoints} />
            {worldPositions.map((p, idx) => (
              <circle key={idx} className="constellation-node" cx={p.x * 10} cy={p.y * 6} r={4} />
            ))}
          </svg>
        )}

        <div className="world-nodes">
          {worldPositions.map((pos, index) => {
            const worldNum = index + 1;
            const status = getWorldStatus(worldNum);
            const completion = getCompletionPercentage(worldNum);
            const completedLevels = getCompletedLevels(worldNum);
            const section = getWorldSection(worldNum);
            const theme = getWorldTheme(worldNum);

            const statusLabel =
              status === "completed" ? "Completed" : status === "current" ? "In Progress" : "Locked";

            return (
              <div
                key={worldNum}
                id={`world-${worldNum}`}
                className={`world-node ${status} ${theme} world-${worldNum}`}
                onClick={() => handleWorldClick(worldNum)}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                role="button"
                tabIndex={0}
                aria-label={`World ${worldNum} - ${section} - ${statusLabel}`}
              >
                <div className="node-glow" aria-hidden="true"></div>

                <div className="node-content">
                  <div className="node-circle">
                    <svg viewBox="0 0 100 100" className="progress-ring" aria-hidden="true">
                      <circle cx="50" cy="50" r="45" className="progress-bg" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="progress-bar"
                        style={{
                          strokeDasharray: `${completion * 2.827} 283`,
                        }}
                      />
                    </svg>

                    {/* inner station design differs for verbal/math */}
                    <div className="station-core" aria-hidden="true">
                      <div className="station-core-inner" />
                      <div className="station-core-rings" />
                    </div>

                    <div className="node-inner">
                      {status === "completed" ? (
                        <span className="node-icon">✓</span>
                      ) : status === "locked" ? (
                        <span className="node-icon">🔒</span>
                      ) : (
                        <span className="node-number">{worldNum}</span>
                      )}
                    </div>

                    <div className="node-sparkle" aria-hidden="true" />
                  </div>

                  {!compact && (
                    <>
                      <div className="node-label">World {worldNum}</div>
                      <div className="node-section">{section}</div>
                      {completion > 0 && completion < 100 && (
                        <div className="node-percentage">{Math.round(completion)}%</div>
                      )}
                    </>
                  )}
                </div>

                {/* NEW: tooltip */}
                {!compact && (
                  <div className="world-tooltip" role="tooltip">
                    <div className="tt-title">
                      <span className={`tt-chip ${theme}`}>{section}</span>
                      <span className="tt-world">World {worldNum}</span>
                    </div>
                    <div className="tt-row">
                      <span className="tt-key">Status</span>
                      <span className={`tt-val ${status}`}>{statusLabel}</span>
                    </div>
                    <div className="tt-row">
                      <span className="tt-key">Completion</span>
                      <span className="tt-val">
                        {completedLevels}/10 ({Math.round(completion)}%)
                      </span>
                    </div>
                    <div className="tt-hint">
                      {status === "locked"
                        ? "Finish the previous world to unlock."
                        : "Click to jump to this world."}
                    </div>
                  </div>
                )}

                {status === "current" && !compact && (
                  <div className="current-indicator">
                    <div className="pulse-dot"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {!compact && (
        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-dot completed"></div>
            <span>Completed</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot current"></div>
            <span>In Progress</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot locked"></div>
            <span>Locked</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorldMap;
