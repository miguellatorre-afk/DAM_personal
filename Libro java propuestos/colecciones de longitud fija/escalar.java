
import java.util.Scanner;

public class escalar {

    public static void main(String[] args) {
        int series1[] = new int[3];
        int series2[] = new int[3];
        int sumescalar = 0;
        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < 3; i++) {
            System.err.println("Ingrese el elemento " + i + " de la serie 1:");
            series1[i] = scanner.nextInt();
            int result1 = series1[i];
            System.err.println("Ingrese el elemento " + i + " de la serie 2:");
            series2[i] = scanner.nextInt();
            int result2 = series2[i];
            int escalar = result2 * result1;
            sumescalar += escalar;
            if (result1 == 0 || result2 == 0) {
                System.out.println("El producto escalar es 0");
            } else {
                return;
            }
        }

        System.out.println("La suma del producto escalar es: " + sumescalar);
    }
}
