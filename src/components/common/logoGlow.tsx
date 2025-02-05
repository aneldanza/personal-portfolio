const LogoGlow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      zoomAndPan="magnify"
      viewBox="0 0 4500 2000"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className="absolute z-0"
    >
      <defs>
        <radialGradient
          id="lightGradient"
          cx="50%"
          cy="20%"
          r="50%"
          fx="50%"
          fy="20%"
        >
          <stop
            offset="0%"
            style={{
              stopColor: "rgba(var(--secondary-bg), 0.6)",
              stopOpacity: 0.8,
            }}
          />
          <stop
            offset="25%"
            style={{
              stopColor: "rgba(var(--secondary-bg), 0.4)",
              stopOpacity: 0.6,
            }}
          />
          <stop
            offset="50%"
            style={{
              stopColor: "rgba(var(--secondary-bg), 0.3)",
              stopOpacity: 0.4,
            }}
          />
          <stop
            offset="75%"
            style={{
              stopColor: "rgba(var(--secondary-bg), 0.2)",
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: "rgba(var(--secondary-bg), 0)",
              stopOpacity: 0,
            }}
          />
        </radialGradient>
      </defs>
      <rect
        fill="url(#lightGradient)"
        width="100%"
        height="100%"
        className="z-0"
      />
    </svg>
  );
};

export default LogoGlow;
