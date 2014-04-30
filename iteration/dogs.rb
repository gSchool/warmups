class Dogs
  POOR      = rand(0,5)
  AVERAGE   = rand(6,10)
  EXCELLENT = rand(11,15)

  def initalize
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

    @dogs = [{:name => "Fido", :size => :large, :owner => joe},
             {:name => "Yapper", :size => :small, :owner => joe},
             {:name => "Bruiser", :size => :large, :owner => joe},
             {:name => "Tank", :size => :huge, :owner => sarah},
             {:name => "Beast", :size => :large, :owner => sarah},
             {:name => "Harleigh", :size => :medium, :owner => andrew},
             {:name => "Tito", :size => :small, :owner => andrew},]
  end

  # only edit below this line

  def huge_dogs
    # only use the @dogs instance variable
  end

  def small_dogs
    # only use the @dogs instance variable
  end

  def big_dogs
    # only use the @dogs instance variable
  end

  def joes_big_dogs
    # only use the @dogs instance variable
  end

  def sizes
    # only use the @dogs instance variable
  end

  def owners
    # only use the @dogs instance variable
  end

  def average_owners
    # only use the @dogs instance variable
  end
end
