
public class VerAlumno {

    public static void main(String[] args) {
        int calif1 = 9;
        int calif2 = 7;
        Alumno alumno1 = new Alumno(123, "Juan");
        alumno1.ponNota(calif1, calif2);
        System.out.println(alumno1.muestraAlumno());
        // Alumno.myReturn resultado = alumno1.muestraAlumno();
        // System.out.println("Media: " + resultado.media);
        // System.out.println("Nombre: " + resultado.nombre);
    }
}
