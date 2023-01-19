package DSAcode;
import java.util.Arrays;
public class reverse {
    public static void Reverse(int []arr){
        for(int i = 0;i<arr.length/2;i++){
            int end = arr.length-i-1;
            int first = arr[i];
            arr[i] = arr[end];
            arr[end] = first;
        }
        System.out.println(Arrays.toString(arr));
    }
    // public static int REv(int [] arr,int start,int end){
    //     if(arr.length == 0){
    //         return arr[0];
    //     }
    //     if(start==end){
    //         return arr[start];
    //     }
    //     start = arr[0];
    //     end = arr.length-1;
    //     arr[0] = arr[end];
    //     arr[end] = start;
    //     return REv(arr, start+1, end-1);

    // }
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,27,55};
        Reverse(arr);
        // System.out.println(REv(arr, 0, arr.length-1));
    }
}
