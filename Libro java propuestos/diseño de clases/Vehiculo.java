

public class Vehiculo {
   public  String model;
   private double potency;
   private boolean fwheels;
   public int time;

   public Vehiculo(String model) {
    this.model = model;
   }

   public  double getPotency(){
    return potency;
   }

   public void setPotency(double potency){
    this.potency = potency;
   }

   public boolean getWheel(){
    return fwheels;
   }

   public void setWheel(boolean fwheels){
    this.fwheels=fwheels;
   }



   public static int gettime(int time){
    return time;
   }

   
}