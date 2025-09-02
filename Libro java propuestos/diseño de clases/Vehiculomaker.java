
import java.util.*;

public class Vehiculomaker {

    public static void main(String[] args) {
        System.err.println("introduce ");
        Scanner scan = new Scanner(System.in);
        String model = scan.nextLine();
        double poten = scan.nextDouble();
        boolean fourw = scan.nextBoolean();

        Vehiculo car1 = new Vehiculo(model);

        car1.setPotency(poten);
        car1.setWheel(fourw);

        System.out.println("Modelo: " + car1.model);
        System.out.println("Potencia " + car1.getPotency());
        System.out.println("Tracción " + car1.getWheel());

    }

}
