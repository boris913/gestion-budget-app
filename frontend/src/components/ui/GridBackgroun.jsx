import { useEffect, useRef } from "react";

const GridBackground = ({ children }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let particlesArray = [];
		const numberOfParticles = 100;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		window.addEventListener("resize", () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});

		class Particle {
			constructor(x, y, directionX, directionY, size, color) {
				this.x = x;
				this.y = y;
				this.directionX = directionX;
				this.directionY = directionY;
				this.size = size;
				this.color = color;
			}

			draw() {
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
				ctx.fillStyle = this.color;
				ctx.fill();
			}

			update() {
				if (this.x + this.size > canvas.width || this.x - this.size < 0) {
					this.directionX = -this.directionX;
				}
				if (this.y + this.size > canvas.height || this.y - this.size < 0) {
					this.directionY = -this.directionY;
				}
				this.x += this.directionX;
				this.y += this.directionY;
				this.draw();
			}
		}

		const init = () => {
			particlesArray = [];
			for (let i = 0; i < numberOfParticles; i++) {
				let size = Math.random() * 2;
				let x = Math.random() * (innerWidth - size * 2);
				let y = Math.random() * (innerHeight - size * 2);
				let directionX = (Math.random() * 0.4) - 0.2;
				let directionY = (Math.random() * 0.4) - 0.2;
				let color = "#FFFFFF";
				particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
			}
		};

		const animate = () => {
			requestAnimationFrame(animate);
			ctx.clearRect(0, 0, innerWidth, innerHeight);

			for (let i = 0; i < particlesArray.length; i++) {
				particlesArray[i].update();
			}
		};

		init();
		animate();
	}, []);

	return (
		<div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
			{/* Canvas for particles */}
			<canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"></canvas>

			{/* Grid pattern */}
			<div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

			{/* Radial gradient overlay */}
			<div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>

			{/* Animated gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-50 animate-gradient"></div>

			<div className="relative z-10 w-full">
				{children}
			</div>
		</div>
	);
};

export default GridBackground;