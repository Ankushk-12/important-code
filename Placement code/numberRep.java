public class numberRep {
    public static int occurance(int lower , int upper , int digit){
        int count = 0;
        for(int i = lower;i<=upper;i++){
            int temp = i;
            while(temp!=0){
                if(temp%10==digit){
                    count++;
                }
                temp = temp/10;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println(occurance(0, 100, 9));
    }
}
