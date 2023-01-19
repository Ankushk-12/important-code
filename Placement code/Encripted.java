import java.util.Scanner;
public class Encripted {
    public static long power(long s , long n){
        if(s==0 || s==1){
            return s;
        }
        if(n==0){
            return 1;
        }
        return s*power(s, n-1);
    }
    public static long Encript(long s,long n, long m ){
        long ans = 0;
        if(s == 0){
            return 0;
        }
        ans = power(s, n);
        ans = ans%10;
        ans = power(ans, m);
        ans = ans%1000000007;
        return ans;
    }
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            long s,n,m;
            System.out.print("Enter the number S : ");
            s = sc.nextInt();
            System.out.print("Enter the number N : ");
            n = sc.nextInt();
            System.out.print("Enter the number M : ");
            m = sc.nextInt();
            System.out.println(Encript(s, n, m));
            System.out.println(power(5, 5));


        }
        

    }
}
