const cursos = ["Javascript", "HTML", "CSS", "C#", "Python", "React"];

class color {
    static cores = ["verde", "preto", "azul", "laranja", "amarelo", "vermelho"];

    static getAllColors = () => {
        return this.cores;
    };

    static getColor = (index) => {
        return this.cores[index];
    };

    static addColor = (color) => {
        this.cores.push(color);
    };

    static clearAllColors = () => {
        this.cores = [];
    };
}

color.clearAllColors();
color.addColor("Pedro");
console.log(color.getAllColors());

export default color;

export { cursos };
