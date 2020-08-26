public class HelloWorld {
        public static void main(String[] args) {
                int a = 2;
                int b = (a > 0) ? (a = 1) : (a = 0);

                System.out.println(a);
        }
}