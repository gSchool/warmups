class Dogs
  POOR      = (0..5).to_a.sample
  AVERAGE   = (6..10).to_a.sample
  EXCELLENT = (11..15).to_a.sample

  def initialize
    joe   = {
      :name => {:first => "Joe", :last=> "Smith"},
      :owner_quality => EXCELLENT
    }
    sarah = {
      :name => {:first => "Sarah", :last => "Smith"},
      :owner_quality => AVERAGE
    }
    andrew = {
      :name => {:first => "Andrew", :last => "Beter"},
      :owner_quality => AVERAGE
    }

    @dogs = [
      {name: "Fido",     size: :large,  owner: joe},
      {name: "Yapper",   size: :small,  owner: joe},
      {name: "Bruiser",  size: :large,  owner: joe},
      {name: "Tank",     size: :huge,   owner: sarah},
      {name: "Beast",    size: :large,  owner: sarah},
      {name: "Harleigh", size: :medium, owner: andrew},
      {name: "Trixie",   size: :small,  owner: andrew}
    ]
  end

  # only edit below this line

  def small_dogs
    small_dogs = Array.new
    @dogs.map { |dog| small_dogs << dog if dog[:size] == :small }
    small_dogs
  end

  def huge_dog
    huge_dogs = Array.new
    @dogs.map { |dog| huge_dogs << {name: dog[:name]} if dog[:size] == :huge }
    huge_dogs
  end

  def large_dog_names
    large_dogs = Array.new
    @dogs.map { |dog| large_dogs << dog[:name] if dog[:size] == :large }
    large_dogs
  end

  def joes_large_dogs
    large_dogs = Array.new
    @dogs.map do |dog| 
      large_dogs << dog[:name] if dog[:size] == :large && dog[:owner][:name][:first] == "Joe"
    end
    large_dogs
  end

  def sizes
    sizes = @dogs.map { |dog| dog[:size] }
    sizes.uniq
  end

  def owners
    owners = Array.new
    @dogs.map { |dog| owners << "#{dog[:owner][:name][:first]} #{dog[:owner][:name][:last]}" }
    owners.uniq
  end

  def average_owners
    average_quality = Array.new
    @dogs.map do |dog| 
      quality = dog[:owner][:owner_quality]
      if quality < 11 && quality > 5
       average_quality << "#{dog[:owner][:name][:first]} #{dog[:owner][:name][:last]}"
      end
    end
    average_quality.uniq
  end
end
