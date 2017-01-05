require 'rspec'
require 'rspec/autorun'

describe 'Dog Hash' do
  it 'returns the values of the first_name and color keys' do
    expect(DOG[:cattle_dog][:names]).to eq(['Harleigh', 'brown'])
  end
end
