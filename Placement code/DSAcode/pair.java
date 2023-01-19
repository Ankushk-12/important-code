package DSAcode;

public class pair {
     public static void pairs(int [] arr){
        for(int i = 0;i<arr.length;i++){  // ----> O(N)
            for(int j = 0;j<arr.length;j++){  // ----> O(N)
                System.out.print(arr[i]+""+arr[j]+" ");  // ----> O(1)
            }
            System.out.println();  // ----> O(1)
        }
     }
     // O(N)*O(N) == O(N^2) +O(1)+O(1) == O(N^2);
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        pairs(arr);
    }
}
