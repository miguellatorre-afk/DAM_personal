
public class Alumno {

    int matricula;
    String nombre;
    double nota1;
    double nota2;
    double media;

    public Alumno(int matricula, String nombre) {
        this.matricula = matricula;
        this.nombre = nombre;
    }

    public void ponNota(double nota1, double nota2) {
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public double eMedia() {
        media = (nota1 + nota2) / 2;
        return media;
    }

    public class myReturn {

        public double media;
        public String nombre;

        public myReturn(double media, String nombre) {
            this.media = media;
            this.nombre = nombre;
        }
    }

    // public  myReturn muestraAlumno(){
    //     String nombre = "Nombre de alumno: " + this.nombre + " con matricula: " + this.matricula;
    //     return new myReturn(media, nombre);
    // }
    public String muestraAlumno() {
        String stringmedia = String.valueOf(eMedia());
        return "nombre " + nombre + " matricula " + matricula + " nota media " + stringmedia;
    }

}
