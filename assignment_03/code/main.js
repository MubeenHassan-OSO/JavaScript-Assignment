class Tool {
    constructor(strength, type) {
        this.strength = strength;
        this.type = type;
    }
    setStrength(strength) {
        this.strength = strength;
    }
}

class Rock extends Tool {
    constructor(strength) {
        super(strength, "r");
    }

    getType() {
        return this.type;
    }
    getStrength() {
        return this.strength;
    }

    fight(value) {
        const currToolStrength = (this_tool_Strength, value) => {
            if (value.getType() == "r") return this_tool_Strength;
            else if (value.getType() == "s") return this_tool_Strength * 2;
            else if (value.getType() == "p") return this_tool_Strength / 2;
        };

        if (currToolStrength(this.strength, value) > value.getStrength())
            return `${this.type} wins againsts ${value.getType()} in strength`;
        else if (currToolStrength(this.strength, value) < value.getStrength())
            return `${this.type} looses againsts ${value.getType()} in strength`;
        else if (currToolStrength(this.strength, value) === value.getStrength())
            return `${this.type} ties againsts ${value.getType()} in strength`;
    }
}


class Paper extends Tool {
    constructor(strength) {
        super(strength, "p");
    }

    getType() {
        return this.type;
    }
    getStrength() {
        return this.strength;
    }

    fight(value) {
        const currToolStrength = (this_tool_Strength, value) => {
            if (value.getType() == "r") return this_tool_Strength * 2;
            else if (value.getType() == "s") return this_tool_Strength / 2;
            else if (value.getType() == "p") return this_tool_Strength;
        };

        if (currToolStrength(this.strength, value) > value.getStrength())
            return `${this.type} wins againsts ${value.getType()} in strength`;
        else if (currToolStrength(this.strength, value) < value.getStrength())
            return `${this.type} looses againsts ${value.getType()} in strength`;
        else if (currToolStrength(this.strength, value) === value.getStrength())
            return `${this.type} ties againsts ${value.getType()} in strength`;
    }
}

class Scissors extends Tool {
    constructor(number) {
        super(number, "s");
    }

    getType() {
        return this.type;
    }
    getStrength() {
        return this.strength;
    }

    fight(value) {
        const currToolStrength = (this_tool_Strength, value) => {
            if (value.getType() == "r") return this_tool_Strength / 2;
            else if (value.getType() == "s") return this_tool_Strength;
            else if (value.getType() == "p") return this_tool_Strength * 2;
        };

        if (currToolStrength(this.strength, value) > value.getStrength())
            return `${this.type} wins againsts ${value.getType()} in strength`;
        else if (currToolStrength(this.strength, value) < value.getStrength())
            return `${this.type} looses againsts ${value.getType()} in strength`;
        else if (currToolStrength(this.strength, value) === value.getStrength())
            return `${this.type} ties againsts ${value.getType()} in strength`;
    }
}

export default main;

function main() {
    const scissors = new Scissors(3);
    const paper = new Paper(1);
    const rock = new Rock(4);

    print(`${scissors.fight(paper)}, ${paper.fight(scissors)}`);
    print(`${paper.fight(rock)}, ${rock.fight(paper)}`);
    print(`${rock.fight(scissors)}, ${scissors.fight(rock)}`);
}