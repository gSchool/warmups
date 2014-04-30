require 'rspec'
require 'rspec/autorun'
require_relative 'dogs'

describe Dogs do
  let(:dogs) { Dogs.new }

  describe "#small_dogs" do
    it "returns all of the small dogs" do
      expect(dogs.small_dogs).to match_array(["Yapper", "Tito"])
    end
  end

  describe "#big_dogs" do
    it "returns all of the big dogs" do
      expect(dogs.big_dogs).to match_array(["Fido", "Bruiser", "Tank", "Beast"])
    end
  end

  describe "#huge_dog" do
    it "returns the huge dog" do
      expect(dogs.huge_dog).to eq('Tank')
    end
  end

  describe "#joes_big_dogs" do
    it "returns only joes dogs" do
      expect(dogs.joes_big_dogs).to match_array(["Fido", "Bruiser"])
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
