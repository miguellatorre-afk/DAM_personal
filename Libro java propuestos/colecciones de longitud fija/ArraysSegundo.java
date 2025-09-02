
import java.util.Scanner;

public class ArraysSegundo {

    public static void main(String[] args) {
        int numeros[] = new int[5];
        int sum = 0;
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < numeros.length; i++) {
            System.out.print("Introduce un número: ");
            numeros[i] = sc.nextInt();
            numeros[i] *= 2;
            System.out.println("Número multiplicado por 2: " + numeros[i]);
            if (numeros[i] % 2 == 0) {
                System.out.println("El número es par.");
                sum = sum + numeros[i];
            } else {
                System.out.println("El número es impar.");
            }
        }
        System.out.println("La suma de los números pares es: " + sum);
    }
}
