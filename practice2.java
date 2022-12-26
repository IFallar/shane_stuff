import java.util.Scanner;

public class practice2 {
   public static void main(String[] args) {
       
    System.out.print("Input 3 Numbers:\n");
    
    Scanner n = new Scanner(System.in);
    
    int n1 = n.nextInt();
    int n2 = n.nextInt();
    int n3 = n.nextInt();

    if (n1 == n2 && n2 == n3){
        System.out.println("All three numbers are equal!");
    }
    else if (n1 == n2 || n1==n3 || n2==n3){
        System.out.println("Two numbers are equal!");
    } 
    else{
        System.out.println("None of the numbers are equal!");
    }
 }
} 
