import java.util.Scanner;

public class find_String {
    public static int find(String str, String str2){
        int count = 0;
        for(int i = 0;i<str.length();i++){
            for(int j = 0;j<str2.length();j++){
                if(str.charAt(i)==str2.charAt(j)){
                    count++;
                }
            }
        }
        return count;

    }
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter the String 1 : ");
            String str = sc.nextLine();
            System.out.print("Enter the String 2 : ");
            String str2 = sc.nextLine();
        System.out.println(find(str,str2));

        }
        
    }
}
