import java.util.Scanner;

public class practice1 {
    public static void main(String[] args) {

        System.out.println("Input how many time you want to repeat: HELLO WORLD ");
        
        Scanner n = new Scanner(System.in);
        int repeat = n.nextInt();

        int i = 0;
        while (i<repeat){
            System.out.println("HELLO WORLD");
            i++;
        }

    }
}
