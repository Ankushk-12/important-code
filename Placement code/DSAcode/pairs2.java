package DSAcode;

public class pairs2 {
    public static void pairs(int [] arr){
        for(int i = 0;i<arr.length;i++){  // ----> O(N)
            for(int j = i+1;j<arr.length;j++){  // ----> N-1, N-2,N-3 .... 1  ---> N(N-1)/2 or N/2
                System.out.print(arr[i]+""+arr[j]+" ");  // ----> O(1)
            }
            System.out.println();  // ----> O(1)
        }
     }
     // N*N/2 = N^2/2 == O(N^2)
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        pairs(arr);
    }
    
}
