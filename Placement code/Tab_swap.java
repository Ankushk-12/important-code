public class Tab_swap {
    public static int []Tabs(int arr[],int k){
        int temp = arr[k];
        for(int i=k;i>0;i--){
            arr[i] = arr[i-1];
        }
        arr[0] = temp;
        return arr;
    }
    public static void main(String[] args) {
        int arr[] = {2,3,4,5,1};
        int arr2[] = Tabs(arr, 2);
        for(int i = 0;i<arr2.length;i++){
            System.out.print(arr2[i]+" ");
        }
        // String str = "A";
        
        // System.out.println(str.length());
        // System.out.println(str.charAt(0));
        // str.substring(0, 1);
        
    }
}
