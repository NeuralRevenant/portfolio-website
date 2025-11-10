import React, { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./AIBrain3D.scss";

// Check if WebGL is available
const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!context;
  } catch (e) {
    return false;
  }
};

// Neural Network Particles Component
const NeuralParticles = () => {
  const particlesRef = useRef();
  const particleCount = 1800;

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [particleCount]);

  const pointsMaterial = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.012,
      color: new THREE.Color("#9bf0ff"),
      transparent: true,
      opacity: 0.65,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <primitive object={new THREE.Points(particlesGeometry, pointsMaterial)} ref={particlesRef} />
  );
};

// Neural Connection Lines
const NeuralConnections = () => {
  const linesRef = useRef();
  const connectionCount = 50;

  const linesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(connectionCount * 6); // 2 points per line

    for (let i = 0; i < connectionCount; i++) {
      const radius = 2.5 + Math.random() * 1.5;
      const theta1 = Math.random() * Math.PI * 2;
      const phi1 = Math.random() * Math.PI;
      const theta2 = theta1 + (Math.random() - 0.5) * 0.5;
      const phi2 = phi1 + (Math.random() - 0.5) * 0.5;

      positions[i * 6] = radius * Math.sin(phi1) * Math.cos(theta1);
      positions[i * 6 + 1] = radius * Math.sin(phi1) * Math.sin(theta1);
      positions[i * 6 + 2] = radius * Math.cos(phi1);

      positions[i * 6 + 3] = radius * Math.sin(phi2) * Math.cos(theta2);
      positions[i * 6 + 4] = radius * Math.sin(phi2) * Math.sin(theta2);
      positions[i * 6 + 5] = radius * Math.cos(phi2);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [connectionCount]);

  const linesMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color("#ff6b6b"),
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
  }, []);

  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <primitive object={new THREE.LineSegments(linesGeometry, linesMaterial)} ref={linesRef} />
  );
};

// Neural fiber bundles criss-crossing the brain volume
const NeuralFibers = ({ fiberCount = 100, pointsPerFiber = 20 }) => {
  const fibers = useMemo(() => {
    const geos = [];
    for (let i = 0; i < fiberCount; i++) {
      // endpoints on or near the brain surface (radius ~2)
      const a = new THREE.Vector3().setFromSphericalCoords(
        2,
        Math.acos(THREE.MathUtils.randFloatSpread(2)),
        Math.PI * 2 * Math.random()
      );
      const b = new THREE.Vector3().setFromSphericalCoords(
        2,
        Math.acos(THREE.MathUtils.randFloatSpread(2)),
        Math.PI * 2 * Math.random()
      );
      // control points inside the sphere for gentle curvature
      const mid1 = a.clone().lerp(b, 0.33).addScaledVector(new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(1.2),
        THREE.MathUtils.randFloatSpread(1.2),
        THREE.MathUtils.randFloatSpread(1.2)
      ), 0.6);
      const mid2 = a.clone().lerp(b, 0.66).addScaledVector(new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(1.2),
        THREE.MathUtils.randFloatSpread(1.2),
        THREE.MathUtils.randFloatSpread(1.2)
      ), 0.6);
      const curve = new THREE.CatmullRomCurve3([a, mid1, mid2, b]);
      const pts = curve.getPoints(pointsPerFiber);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      geos.push(geo);
    }
    return geos;
  }, [fiberCount, pointsPerFiber]);

  return (
    <group>
      {fibers.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color="#5fe0ff" transparent opacity={0.22} blending={THREE.AdditiveBlending} />
        </line>
      ))}
    </group>
  );
};

// Pulsing neuron nodes scattered around
const NeuronNodes = ({ count = 60 }) => {
  const refs = useRef([]);
  const nodes = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const v = new THREE.Vector3().setFromSphericalCoords(
        2 + THREE.MathUtils.randFloatSpread(0.6),
        Math.acos(THREE.MathUtils.randFloatSpread(2)),
        Math.PI * 2 * Math.random()
      );
      return v;
    });
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((m, i) => {
      if (!m) return;
      const s = 0.6 + 0.25 * Math.sin(t * 2 + i);
      m.scale.setScalar(s);
    });
  });

  return (
    <group>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos} ref={(el) => (refs.current[i] = el)}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color="#9be8ff" emissive="#53d0ff" emissiveIntensity={0.8} metalness={0.3} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
};

// Hologram primitives (matte hologram look)
const HoloSphere = () => (
  <mesh>
    <sphereGeometry args={[1.95, 64, 64]} />
    <meshBasicMaterial color="#00c8ff" wireframe transparent opacity={0.25} />
  </mesh>
);

const HoloRings = () => {
  const g1 = useMemo(() => new THREE.TorusGeometry(2.05, 0.01, 8, 120), []);
  const g2 = useMemo(() => new THREE.TorusGeometry(2.05, 0.01, 8, 120), []);
  const g3 = useMemo(() => new THREE.TorusGeometry(2.05, 0.01, 8, 120), []);
  const m = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#00e5ff", transparent: true, opacity: 0.45 }),
    []
  );
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.35;
    ref.current.rotation.z = t * 0.2;
  });
  return (
    <group ref={ref}>
      <mesh geometry={g1} material={m} />
      <mesh geometry={g2} material={m} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={g3} material={m} rotation={[0, Math.PI / 2, 0]} />
    </group>
  );
};

const HoloWireframe = () => {
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2, 2), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);
  return (
    <lineSegments geometry={edges}>
      <lineBasicMaterial color="#64f7ff" transparent opacity={0.35} blending={THREE.AdditiveBlending} />
    </lineSegments>
  );
};

const ScanLine = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const y = Math.sin(t * 1.2) * 1.6;
    if (ref.current) ref.current.position.y = y;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[4.2, 0.015, 4.2]} />
      <meshBasicMaterial color="#00eaff" transparent opacity={0.22} />
    </mesh>
  );
};

const HoloNetwork = () => (
  <group>
    <HoloSphere />
    <HoloRings />
    <HoloWireframe />
    <ScanLine />
  </group>
);


// Orbiting device shapes (chip, laptop, phone, robot)
const DeviceOrbiters = () => {
  const groupsRef = useRef([]);
  const deviceCount = 10;

  const createChip = useCallback(() => {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.35, 0.06, 0.35),
      new THREE.MeshStandardMaterial({ color: "#00d1ff", metalness: 0.8, roughness: 0.2 })
    );
    group.add(body);
    // pins
    const pinMat = new THREE.MeshStandardMaterial({ color: "#bff0ff", metalness: 0.9, roughness: 0.1 });
    for (let i = -3; i <= 3; i++) {
      const pin1 = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.08), pinMat);
      pin1.position.set(i * 0.05, -0.05, 0.2);
      group.add(pin1);
      const pin2 = pin1.clone();
      pin2.position.z = -0.2;
      group.add(pin2);
    }
    return group;
  }, []);

  const createLaptop = useCallback(() => {
    const group = new THREE.Group();
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.03, 0.3),
      new THREE.MeshStandardMaterial({ color: "#66e0ff", metalness: 0.6, roughness: 0.3 })
    );
    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.28, 0.02),
      new THREE.MeshStandardMaterial({ color: "#1a3a5a", emissive: "#0b8bff", emissiveIntensity: 0.3 })
    );
    screen.position.y = 0.16;
    screen.position.z = -0.12;
    screen.rotation.x = -Math.PI / 6;
    group.add(base);
    group.add(screen);
    return group;
  }, []);

  const createPhone = useCallback(() => {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.35, 0.03),
      new THREE.MeshStandardMaterial({ color: "#74d3ff", metalness: 0.7, roughness: 0.25 })
    );
    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.30, 0.01),
      new THREE.MeshStandardMaterial({ color: "#0e2745", emissive: "#2dd4ff", emissiveIntensity: 0.2 })
    );
    screen.position.z = 0.02;
    group.add(body);
    group.add(screen);
    return group;
  }, []);

  const createRobot = useCallback(() => {
    const group = new THREE.Group();
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 16, 16),
      new THREE.MeshStandardMaterial({ color: "#9ae6ff", metalness: 0.7, roughness: 0.3 })
    );
    const eyeMat = new THREE.MeshStandardMaterial({ color: "#ffffff", emissive: "#66e0ff", emissiveIntensity: 0.5 });
    const eye1 = new THREE.Mesh(new THREE.SphereGeometry(0.02, 12, 12), eyeMat);
    const eye2 = eye1.clone();
    eye1.position.set(-0.04, 0.02, 0.1);
    eye2.position.set(0.04, 0.02, 0.1);
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.16, 12),
      new THREE.MeshStandardMaterial({ color: "#6ad6ff", metalness: 0.8, roughness: 0.25 })
    );
    body.position.y = -0.18;
    head.add(eye1);
    head.add(eye2);
    group.add(head);
    group.add(body);
    return group;
  }, []);

  const devices = useMemo(() => [createChip, createLaptop, createPhone, createRobot], [createChip, createLaptop, createPhone, createRobot]);

  // Initialize device groups lazily
  const deviceGroups = useMemo(() => {
    return Array.from({ length: deviceCount }).map((_, i) => {
      const ctor = devices[i % devices.length];
      const g = ctor();
      g.userData.offset = i * ((2 * Math.PI) / deviceCount);
      return g;
    });
  }, [devices]);

  useFrame(({ clock, scene }) => {
    const t = clock.getElapsedTime();
    deviceGroups.forEach((g, i) => {
      const angle = g.userData.offset + t * 0.25;
      const radius = 3.9 + 0.35 * Math.sin(t + i);
      g.position.set(Math.cos(angle) * radius, 0.8 * Math.sin(angle * 0.5), Math.sin(angle) * radius);
      g.rotation.y = angle + Math.sin(t + i) * 0.35;
    });

    // Ensure added to scene once
    if (!groupsRef.current?.length) {
      groupsRef.current = deviceGroups;
      deviceGroups.forEach((g) => scene.add(g));
    }
  });

  return null;
};

// Main AIBrain3D Component with mouse drag control
const AIBrain3D = () => {
  const dragState = useRef({ dragging: false, x: 0, y: 0, vx: 0, vy: 0, id: null });
  const brainGroupRef = useRef();
  const containerRef = useRef(null);

  const onPointerDown = useCallback((e) => {
    e.stopPropagation();
    try { e.target.setPointerCapture?.(e.pointerId); } catch (_) {}
    dragState.current.dragging = true;
    dragState.current.id = e.pointerId;
    dragState.current.x = e.clientX;
    dragState.current.y = e.clientY;
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!dragState.current.dragging) return;
    const rect = containerRef.current?.getBoundingClientRect?.() || { width: 1, height: 1 };
    // Higher sensitivity and direct mapping for fluid control
    const dx = (e.clientX - dragState.current.x) / Math.max(1, rect.width);
    const dy = (e.clientY - dragState.current.y) / Math.max(1, rect.height);
    dragState.current.x = e.clientX;
    dragState.current.y = e.clientY;
    dragState.current.vx = dx * 12.0;
    dragState.current.vy = dy * 12.0;
  }, []);

  const onPointerUp = useCallback(() => {
    dragState.current.dragging = false;
    dragState.current.id = null;
  }, []);

  // Apply inertial rotation to the group
  const BrainController = () => {
    useFrame(() => {
      if (!brainGroupRef.current) return;
      const s = dragState.current;
      // apply rotation (scale small since vx/vy already normalized)
      brainGroupRef.current.rotation.y += s.vx * 0.07 + 0.0025; // stronger response, subtle auto-rotate
      brainGroupRef.current.rotation.x += s.vy * 0.07;
      // damping
      s.vx *= 0.90;
      s.vy *= 0.90;
    });
    return null;
  };


  const [webGLSupported, setWebGLSupported] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check WebGL support on mount
    if (!isWebGLAvailable()) {
      setWebGLSupported(false);
      console.warn('WebGL is not supported in this browser');
    }
  }, []);

  // Fallback UI when WebGL is not supported or error occurs
  if (!webGLSupported || hasError) {
    return (
      <div className="ai-brain-container ai-brain-fallback">
        <div className="brain-fallback-content">
          <div className="fallback-icon">🧠</div>
          <p>3D visualization unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="ai-brain-container"
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        onCreated={() => {
          console.log('WebGL context created successfully');
        }}
        onError={(error) => {
          console.error('Canvas error:', error);
          setHasError(true);
        }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 8, 10]} intensity={1} color="#38b6ff" />
        <pointLight position={[-8, -6, -8]} intensity={0.5} color="#ff6b6b" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#4ecdc4" />

        <group ref={brainGroupRef}>
          <HoloNetwork />
          <NeuralParticles />
          <NeuralConnections />
          <NeuralFibers />
          <NeuronNodes />
        </group>

        <DeviceOrbiters />
        <BrainController />
      </Canvas>

    </div>
  );
};

export default AIBrain3D;

