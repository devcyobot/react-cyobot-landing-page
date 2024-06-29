// Source used: https://codepen.io/wvr/pen/WrNgJp

export class Vector {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	static fromAngle(angle: number, magnitude: number = 1): Vector {
		return new Vector(magnitude * Math.cos(angle), magnitude * Math.sin(angle));
	}

	add(v: Vector): Vector {
		return new Vector(this.x + v.x, this.y + v.y);
	}

	subtract(v: Vector): Vector {
		return new Vector(this.x - v.x, this.y - v.y);
	}

	multiply(s: number): Vector {
		return new Vector(this.x * s, this.y * s);
	}

	divide(s: number): Vector {
		return new Vector(this.x / s, this.y / s);
	}

	magnitude(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	unit(): Vector {
		return this.divide(this.magnitude());
	}

	angle(): number {
		return Math.atan2(this.y, this.x);
	}

	toString(): string {
		return `(${this.x}, ${this.y})`;
	}
}

abstract class PathCommand {
	abstract toString(): string;
}

export class Path {
	commands: Array<PathCommand>;

	constructor(commands: Array<PathCommand>) {
		this.commands = commands;
	}

	toString(): string {
		return this.commands.map((command) => command.toString()).join('');
	}

	static M(point: Vector): PathM {
		return new PathM(point);
	}

	static L(to: Vector): PathL {
		return new PathL(to);
	}

	static Q(control: Vector, to: Vector): PathQ {
		return new PathQ(control, to);
	}

	static Z(): PathZ {
		return new PathZ();
	}
}

class PathM extends PathCommand {
	point: Vector;

	constructor(point: Vector) {
		super();
		this.point = point;
	}

	toString(): string {
		return `M${this.point.x} ${this.point.y}`;
	}
}

class PathL extends PathCommand {
	to: Vector;

	constructor(to: Vector) {
		super();
		this.to = to;
	}

	toString(): string {
		return `L${this.to.x} ${this.to.y}`;
	}
}

class PathQ extends PathCommand {
	control: Vector;
	to: Vector;

	constructor(control: Vector, to: Vector) {
		super();
		this.control = control;
		this.to = to;
	}

	toString(): string {
		return `Q${this.control.x} ${this.control.y} ${this.to.x} ${this.to.y}`;
	}
}

class PathZ extends PathCommand {
	toString(): string {
		return 'Z';
	}
}
