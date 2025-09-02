
import java.util.*;

public class DVDGestion {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduzca la descripción");
        String describe = scanner.nextLine();
        
        System.out.println("Introduzca la duración");
        int duration = scanner.nextInt(); 
        
        System.out.println("Es thriller");
        boolean loes = scanner.nextBoolean();

        DVDCine film = new DVDCine(describe, duration, loes);
        System.out.println(film.muestraDVDCine());
        System.out.println(film.muestraDuracion());
        System.out.println("¿Es thriller? " + film.isThriller());
    }
}
