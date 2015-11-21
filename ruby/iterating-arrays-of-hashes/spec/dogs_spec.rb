require 'rspec'
require 'rspec/autorun'
require 'dogs'

describe Dogs do
  let(:dogs) { Dogs.new }

  describe "#small_dogs" do
    it "returns all of the small dogs" do
      small_dogs = dogs.small_dogs

      expect(small_dogs.length).to eq(2)
      expect(small_dogs.first).to include(name: "Yapper")
      expect(small_dogs.last).to include(name: "Trixie")
    end
  end

  describe "#huge_dog" do
    it "returns the huge dog" do
      expect(dogs.huge_dog).to include(name: 'Tank')
    end
  end

  describe "#large_dogs_names" do
    it "returns all of the big dogs" do
      expect(dogs.large_dog_names).to match_array(["Fido", "Bruiser", "Beast"])
    end
  end


  describe "#joes_large_dogs" do
    it "returns only joes large dogs" do
      expect(dogs.joes_large_dogs).to match_array(["Fido", "Bruiser"])
    end
  end

  describe "#sizes" do
    it "returns all dog sizes" do
      expect(dogs.sizes).to match_array([:small, :medium, :large, :huge])
    end
  end

  describe "#owners" do
    it "returns all of the owners" do
      expect(dogs.owners).to match_array(['Joe Smith', 'Sarah Smith', 'Andrew Beter'])
    end
  end

  describe "#average_owners" do
    it "returns all average owners" do
      expect(dogs.average_owners).to match_array(['Sarah Smith', 'Andrew Beter'])
    end
  end
end
