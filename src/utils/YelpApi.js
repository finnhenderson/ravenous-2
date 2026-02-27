const apiKey = 'yFGOFCiVooELzG1aPZiDSudJjOeJkKTGcZ3CQ9I2cqK2iJts6mtb7Oml7xPBNQ2KwJG2YyVcoly03d_G2dtMSISBfvcxi7k2mEpxEu5ZEPRiBK8D_rov458MyAWhaXYx';

function searchYelp(term, location, sortBy) {
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  })
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          name: business.name,
          imageSrc: business.image_url,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipcode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
      return [];
    });
}


export default { searchYelp };
