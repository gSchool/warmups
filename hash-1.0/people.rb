PEOPLE = {
  "joe" => {
    first_name: "Joe",
    last_name: "Jenkins",
    preferences: {
      meal: "meat",
      favorite_genres: ["jazz", "soul"],
    },
    sitting_next_to: :sue,
    correspondence: [
      {date: "11/4/2014", description: "sent invitation"},
      {date: "12/2/2014", description: "replied yes"},
    ],
  },
  "sue" => {
    :first_name => "Sue",
    :last_name => "Summers",
    :preferences => {
      :meal => "fish",
      :favorite_genres => ["funk", "blues"],
    },
    sitting_next_to: :joe,
    correspondence: [
      {date: "11/7/2014", description: "sent invitation"},
      {date: "12/8/2014", description: "replied yes + 1"},
    ],
  },
}
