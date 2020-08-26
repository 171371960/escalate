public class Puppy {
    int puppyAge;

    public Puppy(String name) {
        System.out.println("小狗的名字是 : " + name);
    }

    public void setAge(int age) {
        puppyAge = age;
    }

    public int getAge() {
        System.out.println("小狗的年龄为 : " + puppyAge);
        return puppyAge;
    }

    public static void main(String[] args) {
        /* 创建对象 */
        Puppy myPuppy = new Puppy("tommy");
        /* 通过方法来设定age */
        myPuppy.setAge(2);
        /* 调用另一个方法获取age */
        myPuppy.getAge();

        String msg = "Bus 02.Port1: Dev1, Class=root_hub, Driver=ehci_hcd/2p, 480M |__ Port1: Dev2, If 0, Class=hub, Driver=hub/6p, 480M |__ Port1 Dev3, If 0, Class=print, Driver=usblp, 12M";
        String[] sp = msg.split(":");
        for (int i = 0; i < sp.length - 1; i++) {
            System.out.print(sp[i].charAt(sp[i].length() - 1));
        }
        System.out.println("变量值：" + myPuppy.puppyAge);
        System.out.println(msg);
    }
}