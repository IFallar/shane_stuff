public class dog {

    String breed;
	
	//CONSTRUCTOR
    public dog(){
		this.breed ="Poodle";
	}

	public String getBreed() {
		return breed;
	}
    
	public static void main(String[] args) {
		dog breed = new dog();
		String dogbreed = breed.getBreed();
		System.out.println(dogbreed);

	}

}
