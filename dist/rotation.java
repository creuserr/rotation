import java.util.Random;

public class Rotation {
  private Random random = new Random();
  private int getRandom(int min, int max) {
    return random.nextInt(max - min + 1) + min;
  }
  private String model() {
    char[] charArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();
    StringBuilder model = new StringBuilder();
    for(int i = 0; i < 3; i++) {
      model.append(charArray[getRandom(0, charArray.length - 1)]);
    }
    return model.toString() + getRandom(100, 999);
  }
  private String build() {
    char[] charArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();
    StringBuilder build = new StringBuilder();
    for(int i = 0; i < 2; i++) {
      build.append(charArray[getRandom(0, charArray.length - 1)]);
    }
    StringBuilder buildString = new StringBuilder();
    for(int i = 0; i < 3; i++) {
      buildString.append(getRandom(1, 99999)).append(".");
    }
    return build.toString() + buildString.substring(0, buildString.length() - 1);
  }
  public String create() {
    String prod = "Mozilla " + getRandom(3, 5) + ".0";
    String andr = "Android " + getRandom(10, 13);
    String mod = model() + " Build/" + build();
    String kit = "AppleWebKit/" + getRandom(500, 550);
    String ver = "Version/" + getRandom(3, 5);
    String chrom = "Chrome/" + build();
    String safar = "Mobile Safari/" + getRandom(500, 550);
    return prod + " (Linux; " + andr + " " + mod + ") " + kit + " (KHTML, like Gecko) " + ver + " " + chrom + " " + safar;
  }
}