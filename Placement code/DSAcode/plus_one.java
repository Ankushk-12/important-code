package DSAcode;

import java.util.Arrays;

public class plus_one {
    public static int[] plusOne(int[] digits) {
        int sum = 0;
        for(int i =0;i<digits.length;i++){
            sum = sum*10+digits[i];
        }
        sum = sum+1;
        // System.out.println(sum);
        int index = digits.length-1;
        while(sum!=0){
            int temp = sum%10;
            // System.out.print(temp);
            digits[index] = temp;
            index--;

            sum = sum/10;
        }
        return digits;
    }
    public static void main(String[] args) {
        int [] arr = {1,2,3};
        // int [] arr2 = {0,0,0};
        // arr2 = plusOne(arr);
        // System.out.println(Arrays.toString(arr2));
        System.out.println(Arrays.toString(plusOne(arr)));
    }
}
