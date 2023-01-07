
import java.util.Random;
import java.util.Arrays;
import java.util.Scanner;

public class MonkeyGame {
    
    static String [] card_name = { "SPADE", "HEART", "DIAMOND", "CLOVES" };
    static String [] card_number = { "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" };
    static int [] decks = new int[52];
    static int [] play1 = new int[26];
    static int [] play2 = new int[25];
    
    public static void shuffle(int [] decks, String [] card_name, String [] card_number){
        
        System.out.println("SHUFFLED CARDS");
        for ( int index = 0; index < decks.length; index++ ) {
            
            int indexx = (int) (Math.random() * decks.length);
            int temp = decks[index];
            decks[index] = decks[indexx];
            decks[indexx] = temp;
            
        }
        
        for ( int index = 0; index < decks.length; index++ ) {
        
            String cards_name = card_name[decks[index] / 13];
            String cards_number = card_number[decks[index] % 13];
            System.out.println( cards_number + " of " + cards_name);
            
        }
        
    }
    
    public static String[] distribution( int [] decks, String [] card_name, String [] card_number ){
        
        System.out.println();
        System.out.println("PLAYER 1 CARDS");
        for ( int i = 0; i < play1.length; i++ ) {
            
            int p = (int)(Math.random() * decks.length);
            int pp = (int)(Math.random() * decks.length);
            String p_p = card_name[decks[p] / 13];
            String pp_p = card_number[decks[pp] % 13];
            
            if ( (p_p != "HIDDEN") && (pp_p != "HIDDEN") ) {
                
                String result = pp_p + " of " + p_p;
                
            }

	return result;
            
        }
        
        System.out.println();
        System.out.println("PLAYER 2 CARDS");
        for ( int i = 0; i < play2.length; i++ ) {
            
            int p = (int)(Math.random() * decks.length);
            int pp = (int)(Math.random() * decks.length);
            String p_p = card_name[decks[p] / 13];
            String pp_p = card_number[decks[pp] % 13];
            
            if ( (p_p != "HIDDEN") && (pp_p != "HIDDEN") ) {
                
                String result = pp_p + " of " + p_p;
                
            }
	return result;
        } 
    }

    public static void main(String[] args) {
        
        Random eri  = new Random();
        Scanner erika = new Scanner(System.in);
        
        // Initializing the index of the decks
        for ( int index = 0; index < decks.length; index++ ) {
            
            decks[index] = index;
            
        }
        
        // Shuffled cards
        shuffle(decks, card_name, card_number);
        
        distribution(decks, card_name, card_number);
         
        System.out.println();
        int [] hide = new int[1];
        
        for ( int i = 0; i < hide.length; i++ ) {
            
            int hidee = (int)(Math.random() * decks.length);
            int hideee = (int)(Math.random() * decks.length);
            String hidee_e = card_name[decks[hidee] / 13];
            String hidee_ee = card_number[decks[hideee] % 13 ];
            
            System.out.println("HIDDEN CARD: " + hidee_ee + " of " + hidee_e);
            
            hidee_e = "HIDDEN";
            hidee_ee = "HIDDEN";
            
        }
    }
}
