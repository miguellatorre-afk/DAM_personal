
import java.util.Scanner;

public class SumaMatrices {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int u = sc.nextInt();
        int v = sc.nextInt();
        System.out.println("número de filas: " + u);
        System.out.println("número de columnas: " + v);
        int matrix[][] = new int[u][v];
        System.out.printf("Matriz 1 es de %d x %d%n", u, v);
        int matrix2[][] = new int[u][v];
        System.out.printf("Matriz 2 es de %d x %d%n", u, v);

        System.out.println("Matriz 1:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = sc.nextInt();
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("Matriz 2:");
        for (int i = 0; i < matrix2.length; i++) {
            for (int j = 0; j < matrix2[i].length; j++) {
                matrix2[i][j] = sc.nextInt();
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println();
        }
        int[][] newmatriz = new int[u][v];

        for (int i = 0; i < u; i++) {
            for (int j = 0; j < v; j++) {
                newmatriz[i][j] = matrix[i][j] + matrix2[i][j];
            }
        }
        System.out.println("Suma de las matrices:");
        for (int[] row : newmatriz) {
            for (int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }

    }

}
