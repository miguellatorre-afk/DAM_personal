
public class DVDCine{
    public String description;
    public int duration;
    public boolean thriller = false;

    public DVDCine(String description, int duration, boolean thriller) {
        this.description = description;
        this.duration = duration;
        this.thriller = thriller;
    }

    public String muestraDVDCine(){
        return "descripcion: " + description;
    }

    public String muestraDuracion(){
        return duration + " min";
    }

    public boolean isThriller(){
        return thriller;
    }

}