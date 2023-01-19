import java.util.Scanner;

public class Outerbrakets{
    public static String remove_outer(String str){
        String result = "";
            int j = 0;
            // for(int i = 0;i<str.length()-1;i++){
            //     if(str.charAt(i)==40 && str.charAt(i+1)==41){
            //         // j--;
            //         result+=str.charAt(i);
            //         result+= str.charAt(i+1);
            //     }
            for(int i = 0;i<str.length()-1;i++){
                if(str.charAt(i)==41){
                    j--;
                }
                if(j!=0){
                    result = result+str.charAt(i);
                }
                if(str.charAt(i)==40){
                    j++;
                }
            }
            return result;
    }
    public static void main(String[] args) {
        int num = 'A';
        int num2 = 'Z';
        int num3 = 'a';
        int num4 = 'z';
        System.out.println(num);
        System.out.println(num2);
        System.out.println(num3);
        System.out.println(num4);
        try(Scanner sc = new Scanner(System.in);){
            System.out.print("Enter the new String : ");
            String str = sc.nextLine();
            String ans = remove_outer(str);
            System.out.println(ans);
        }
    }
}