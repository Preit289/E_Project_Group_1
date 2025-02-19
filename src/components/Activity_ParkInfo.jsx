import React from "react";
import { useState } from "react";
import "../styles/pages/Activity.scss";
import FrozenFlavors from "../assets/img/FrozenFlavors.jpeg";

// Data for activities
const parkInfo = {
  coolStuff: [
    {
      name: "Official Parking Lot",
      title: "Official Parking Lot",
      image: FrozenFlavors,
      description: "Convenient parking right at the park's entrance."
    },
    {
      name: "Batting Cages",
      title: "Batting Cages",
      image: "path_to_batting_cages_image",
      description: "Test your swing and hit some home runs at our state-of-the-art batting cages."
    },
    {
      name: "Racing Simulator",
      title: "Racing Simulator",
      image: "path_to_racing_simulator_image",
      description: "Experience the thrill of high-speed racing in our immersive racing simulator."
    },
    {
      name: "Food Trailer Emporium",
      title: "Food Trailer Emporium",
      image: "path_to_food_trailer_image",
      description: "Enjoy a variety of delicious food options from our diverse food trailers."
    },
    {
      name: "Temporary Tattoo",
      title: "Temporary Tattoo",
      image: "path_to_temporary_tattoo_image",
      description: "Get a fun and colorful temporary tattoo to show off at the park."
    },
    {
      name: "Cool Player",
      title: "Cool Player",
      image: "path_to_cool_player_image",
      description: "Relax and listen to some tunes with our Cool Player music station."
    },
    {
      name: "Fishing Pond",
      title: "Fishing Pond",
      image: "path_to_fishing_pond_image",
      description: "Cast a line and try your luck at catching some fish in our serene fishing pond."
    },
    {
      name: "Gem Mining Sluice",
      title: "Gem Mining Sluice",
      image: "path_to_gem_mining_image",
      description: "Pan for gemstones and uncover hidden treasures at our gem mining sluice."
    }
  ],
  thrillRides: [
    {
      name: "Looping Star",
      title: "Looping Star",
      image: "/images/looping_star.jpg",
      description: "Experience the thrill of a lifetime on the Looping Star roller coaster!"
    },
    {
      name: "Wave Swinger",
      title: "Wave Swinger",
      image: "/images/wave_swinger.jpg",
      description: "Soar through the air on the exciting Wave Swinger ride."
    },
    {
      name: "Rockin' Tug",
      title: "Rockin' Tug",
      image: "/images/rockin_tug.jpg",
      description: "Take a wild ride on the rocking and spinning Rockin' Tug."
    },
    {
      name: "Pharaoh's Fury",
      title: "Pharaoh's Fury",
      image: "/images/pharaohs_fury.jpg",
      description: "Swing high and fast on the majestic Pharaoh's Fury."
    },
    {
      name: "Loop-O-Plane",
      title: "Loop-O-Plane",
      image: "/images/loop_o_plane.jpg",
      description: "Defy gravity on the thrilling Loop-O-Plane ride."
    },
    {
      name: "Double Shot",
      title: "Double Shot",
      image: "/images/double_shot.jpg",
      description: "Feel the adrenaline rush as you're launched into the sky on the Double Shot."
    },
    {
      name: "Tornado",
      title: "Tornado",
      image: "/images/tornado.jpg",
      description: "Get caught in the whirlwind of excitement on the Tornado ride."
    },
    {
      name: "Spook Mansion",
      title: "Spook Mansion",
      image: "/images/spook_mansion.jpg",
      description: "Brave the haunted halls of the eerie Spook Mansion."
    },
    {
      name: "Haunted House",
      title: "Haunted House",
      image: "/images/haunted_house.jpg",
      description: "Face your fears in the spine-chilling Haunted House."
    },
    {
      name: "Bumper Cars",
      title: "Bumper Cars",
      image: "/images/bumper_cars.jpg",
      description: "Have a smashing good time with friends and family in the Bumper Cars."
    },
    {
      name: "Moby Dick",
      title: "Moby Dick",
      image: "/images/moby_dick.jpg",
      description: "Ride the waves of excitement on the Moby Dick ride."
    },
    {
      name: "Gravitron",
      title: "Gravitron",
      image: "/images/gravitron.jpg",
      description: "Experience the force of gravity on the spinning Gravitron."
    },
    {
      name: "Tilt-a-Whirl",
      title: "Tilt-a-Whirl",
      image: "/images/tilt_a_whirl.jpg",
      description: "Spin and whirl around on the classic Tilt-a-Whirl ride."
    },
    {
      name: "Chaos",
      title: "Chaos",
      image: "/images/chaos.jpg",
      description: "Get ready for a wild and chaotic ride on Chaos."
    },
    {
      name: "Cliff Hanger",
      title: "Cliff Hanger",
      image: "/images/cliff_hanger.jpg",
      description: "Soar through the sky like a hang glider on the Cliff Hanger ride."
    }
  ],
  games: [
    {
      name: "Duck Pond",
      title: "Duck Pond",
      image: "/images/duck_pond.jpg",
      description: "Try your luck at the Duck Pond and win cute prizes."
    },
    {
      name: "Shoot Range",
      title: "Shoot Range",
      image: "/images/shoot_range.jpg",
      description: "Test your aim and hit the targets at the Shoot Range."
    },
    {
      name: "Sailor Pong Basketball",
      title: "Sailor Pong Basketball",
      image: "/images/sailor_pong_basketball.jpg",
      description: "Show off your basketball skills in the Sailor Pong Basketball game."
    },
    {
      name: "Shilling's Shooting Gallery",
      title: "Shilling's Shooting Gallery",
      image: "/images/shillings_shooting_gallery.jpg",
      description: "Hit as many targets as you can at Shilling's Shooting Gallery."
    },
    {
      name: "Shilling's Other Gallery",
      title: "Shilling's Other Gallery",
      image: "/images/shillings_other_gallery.jpg",
      description: "Challenge yourself at Shilling's Other Gallery with various fun targets."
    },
    {
      name: "Long Range Basketball",
      title: "Long Range Basketball",
      image: "/images/long_range_basketball.jpg",
      description: "See if you can make those long-distance shots at the Long Range Basketball game."
    },
    {
      name: "Race Cars",
      title: "Race Cars",
      image: "/images/race_cars.jpg",
      description: "Race against friends and family in the exciting Race Cars game."
    },
    {
      name: "Hook Early Candy Stand",
      title: "Hook Early Candy Stand",
      image: "/images/hook_early_candy_stand.jpg",
      description: "Catch delicious candies at the Hook Early Candy Stand."
    },
    {
      name: "Fishin' Hole",
      title: "Fishin' Hole",
      image: "/images/fishin_hole.jpg",
      description: "Reel in some fun at the Fishin' Hole game."
    },
    {
      name: "Frog Go Race",
      title: "Frog Go Race",
      image: "/images/frog_go_race.jpg",
      description: "Race frogs and see which one comes out on top in the Frog Go Race game."
    },
    {
      name: "Spin to Win",
      title: "Spin to Win",
      image: "/images/spin_to_win.jpg",
      description: "Give the wheel a spin and try your luck at winning great prizes."
    },
    {
      name: "Balloon Bust",
      title: "Balloon Bust",
      image: "/images/balloon_bust.jpg",
      description: "Pop balloons and win prizes at the Balloon Bust game."
    },
    {
      name: "Short Range Basketball",
      title: "Short Range Basketball",
      image: "/images/short_range_basketball.jpg",
      description: "Test your shooting skills at the Short Range Basketball game."
    },
    {
      name: "Water Gun",
      title: "Water Gun",
      image: "/images/water_gun.jpg",
      description: "Spray the targets and win prizes in the Water Gun game."
    },
    {
      name: "Balloon Dart",
      title: "Balloon Dart",
      image: "/images/balloon_dart.jpg",
      description: "Aim your darts and pop balloons to win big at the Balloon Dart game."
    },
    {
      name: "Candy Wheel",
      title: "Candy Wheel",
      image: "/images/candy_wheel.jpg",
      description: "Spin the Candy Wheel and win sweet treats."
    },
    {
      name: "Big Bass",
      title: "Big Bass",
      image: "/images/big_bass.jpg",
      description: "Catch the biggest fish at the Big Bass game and win prizes."
    },
    {
      name: "Block Buster Ball",
      title: "Block Buster Ball",
      image: "/images/block_buster_ball.jpg",
      description: "Knock down the blocks and win at the Block Buster Ball game."
    },
    {
      name: "Goblet Toss",
      title: "Goblet Toss",
      image: "/images/goblet_toss.jpg",
      description: "Toss balls into the goblets and win prizes at the Goblet Toss game."
    },
    {
      name: "Virgil Seltzer",
      title: "Virgil Seltzer",
      image: "/images/virgil_seltzer.jpg",
      description: "Try your hand at the Virgil Seltzer game and win cool prizes."
    },
    {
      name: "Goblet Toss",
      title: "Goblet Toss",
      image: "/images/goblet_toss.jpg",
      description: "Toss balls into the goblets and win prizes at the Goblet Toss game."
    }
  ],
  kiddieRides: [
    {
      name: "Miniature Train",
      title: "Miniature Train",
      image: "/images/miniature_train.jpg",
      description: "A fun and safe ride for the little ones on the Miniature Train."
    },
    {
      name: "Frog Hoppers",
      title: "Frog Hoppers",
      image: "/images/frog_hoppers.jpg",
      description: "Hop along with our friendly frogs on the Frog Hoppers ride."
    },
    {
      name: "Balloon Ferris Wheel",
      title: "Balloon Ferris Wheel",
      image: "/images/balloon_ferris_wheel.jpg",
      description: "Enjoy a gentle ride with a great view on the Balloon Ferris Wheel."
    },
    {
      name: "Antique Airplanes",
      title: "Antique Airplanes",
      image: "/images/antique_airplanes.jpg",
      description: "Fly high in the sky on our charming Antique Airplanes ride."
    },
    {
      name: "Merry-Go-Round",
      title: "Merry-Go-Round",
      image: "/images/merry_go_round.jpg",
      description: "Experience the classic fun of the Merry-Go-Round with your favorite animals."
    },
    {
      name: "Antique Cars",
      title: "Antique Cars",
      image: "/images/antique_cars.jpg",
      description: "Drive around in style with our delightful Antique Cars ride."
    },
    {
      name: "Motorcycles",
      title: "Motorcycles",
      image: "/images/motorcycles.jpg",
      description: "Vroom vroom! Ride our mini motorcycles on this exciting kiddie ride."
    },
    {
      name: "Boats",
      title: "Boats",
      image: "/images/boats.jpg",
      description: "Sail away on a gentle adventure with our kiddie Boats ride."
    },
    {
      name: "Sky Fighter",
      title: "Sky Fighter",
      image: "/images/sky_fighter.jpg",
      description: "Take to the skies and be a hero on the Sky Fighter ride."
    },
    {
      name: "Frog Prince",
      title: "Frog Prince",
      image: "/images/frog_prince.jpg",
      description: "Join the Frog Prince on a magical ride full of hopping fun."
    },
    {
      name: "Magic Ring",
      title: "Magic Ring",
      image: "/images/magic_ring.jpg",
      description: "Spin around in enchantment on the Magic Ring ride."
    },
    {
      name: "Red Baron Airplanes",
      title: "Red Baron Airplanes",
      image: "/images/red_baron_airplanes.jpg",
      description: "Fly with the Red Baron on this nostalgic airplane ride."
    },
    {
      name: "Little Ferris Wheel",
      title: "Little Ferris Wheel",
      image: "/images/little_ferris_wheel.jpg",
      description: "Take a delightful ride on the Little Ferris Wheel, perfect for kids."
    },
    {
      name: "Superhero Roller Coaster",
      title: "Superhero Roller Coaster",
      image: "/images/superhero_roller_coaster.jpg",
      description: "Join the superheroes on a thrilling roller coaster adventure."
    },
    {
      name: "Tea Cups",
      title: "Tea Cups",
      image: "/images/tea_cups.jpg",
      description: "Spin around with friends in our whimsical Tea Cups ride."
    },
    {
      name: "Jumbo Around",
      title: "Jumbo Around",
      image: "/images/jumbo_around.jpg",
      description: "Take a ride on the Jumbo Around with fun-filled moments for kids."
    },
    {
      name: "Whip",
      title: "Whip",
      image: "/images/whip.jpg",
      description: "Feel the thrill of the Whip as you go round and round."
    },
    {
      name: "Top Spin",
      title: "Top Spin",
      image: "/images/top_spin.jpg",
      description: "Enjoy a spinning adventure on the Top Spin kiddie ride."
    },
    {
      name: "Kiddie Speed Train",
      title: "Kiddie Speed Train",
      image: "/images/kiddie_speed_train.jpg",
      description: "All aboard the Kiddie Speed Train for a fast-paced fun ride."
    },
    {
      name: "Raiders",
      title: "Raiders",
      image: "/images/raiders.jpg",
      description: "Join the adventure on the Raiders ride, full of excitement for kids."
    },
    {
      name: "Sky Glider",
      title: "Sky Glider",
      image: "/images/sky_glider.jpg",
      description: "Glide through the air on the Sky Glider, a gentle ride for children."
    },
    {
      name: "Happy Swing",
      title: "Happy Swing",
      image: "/images/happy_swing.jpg",
      description: "Swing back and forth with joy on the Happy Swing ride."
    },
    {
      name: "Clown Swing",
      title: "Clown Swing",
      image: "/images/clown_swing.jpg",
      description: "Swing and laugh with the Clown Swing ride, perfect for kids."
    },
    {
      name: "Mini Himalaya",
      title: "Mini Himalaya",
      image: "/images/mini_himalaya.jpg",
      description: "Go on a mini mountain adventure with the Mini Himalaya ride."
    },
    {
      name: "Super Slide",
      title: "Super Slide",
      image: "/images/super_slide.jpg",
      description: "Slide down and have fun with the Super Slide, great for all kids."
    }
  ],
  food: [
    {
      name: "Kate's Place",
      title: "Kate's Place",
      image: "/images/kates_place.jpg",
      description: "Enjoy a variety of delicious meals and snacks at Kate's Place."
    },
    {
      name: "Lemonade",
      title: "Lemonade",
      image: "/images/lemonade.jpg",
      description: "Refresh yourself with a glass of freshly squeezed lemonade."
    },
    {
      name: "Shish Kabobs",
      title: "Shish Kabobs",
      image: "/images/shish_kabobs.jpg",
      description: "Savor the taste of grilled shish kabobs, a perfect treat."
    },
    {
      name: "Bayside Ice Cream",
      title: "Bayside Ice Cream",
      image: "/images/bayside_ice_cream.jpg",
      description: "Cool off with a scoop of delicious ice cream from Bayside."
    },
    {
      name: "Pretzels",
      title: "Pretzels",
      image: "/images/pretzels.jpg",
      description: "Snack on warm, soft pretzels sprinkled with salt."
    },
    {
      name: "Headliner",
      title: "Headliner",
      image: "/images/headliner.jpg",
      description: "Discover a variety of tasty meals and snacks at Headliner."
    },
    {
      name: "Hawaiian Shaved Ice",
      title: "Hawaiian Shaved Ice",
      image: "/images/hawaiian_shaved_ice.jpg",
      description: "Enjoy refreshing Hawaiian shaved ice in a variety of flavors."
    },
    {
      name: "Big Chick's Mini Donuts",
      title: "Big Chick's Mini Donuts",
      image: "/images/big_chicks_mini_donuts.jpg",
      description: "Delight in fresh, warm mini donuts from Big Chick's."
    },
    {
      name: "Dip N Dots",
      title: "Dip N Dots",
      image: "/images/dip_n_dots.jpg",
      description: "Try the unique and fun Dip N Dots ice cream treat."
    },
    {
      name: "Club Island",
      title: "Club Island",
      image: "/images/club_island.jpg",
      description: "Indulge in a variety of dishes at Club Island."
    },
    {
      name: "Cotton Candy",
      title: "Cotton Candy",
      image: "/images/cotton_candy.jpg",
      description: "Enjoy the sweet and fluffy taste of cotton candy."
    },
    {
      name: "Glenn's Great Fries",
      title: "Glenn's Great Fries",
      image: "/images/glenns_great_fries.jpg",
      description: "Savor the crispy and delicious fries from Glenn's Great Fries."
    },
    {
      name: "Gelato",
      title: "Gelato",
      image: "/images/gelato.jpg",
      description: "Treat yourself to creamy and flavorful gelato."
    },
    {
      name: "Grandpa's Lemonade",
      title: "Grandpa's Lemonade",
      image: "/images/grandpas_lemonade.jpg",
      description: "Quench your thirst with a refreshing lemonade from Grandpa's."
    },
    {
      name: "Top Dog's Walking Tacos",
      title: "Top Dog's Walking Tacos",
      image: "/images/top_dogs_walking_tacos.jpg",
      description: "Grab a convenient and delicious walking taco from Top Dog's."
    },
    {
      name: "Blue's Sushi Shack",
      title: "Blue's Sushi Shack",
      image: "/images/blues_sushi_shack.jpg",
      description: "Enjoy fresh and tasty sushi at Blue's Sushi Shack."
    },
    {
      name: "Bayside Ice Cream",
      title: "Bayside Ice Cream",
      image: "/images/bayside_ice_cream.jpg",
      description: "Cool off with a scoop of delicious ice cream from Bayside."
    },
    {
      name: "Sizzle Pigs BBQ",
      title: "Sizzle Pigs BBQ",
      image: "/images/sizzle_pigs_bbq.jpg",
      description: "Satisfy your cravings with mouth-watering BBQ from Sizzle Pigs."
    },
    {
      name: "Chillin' Pizza",
      title: "Chillin' Pizza",
      image: "/images/chillin_pizza.jpg",
      description: "Grab a slice of hot and cheesy pizza from Chillin' Pizza."
    },
    {
      name: "Nappy's",
      title: "Nappy's",
      image: "/images/nappys.jpg",
      description: "Discover delicious dishes and snacks at Nappy's."
    },
    {
      name: "Slice of Heaven",
      title: "Slice of Heaven",
      image: "/images/slice_of_heaven.jpg",
      description: "Indulge in a perfect slice of pizza at Slice of Heaven."
    },
    {
      name: "Sketchy Hot Dog Cart",
      title: "Sketchy Hot Dog Cart",
      image: "/images/sketchy_hot_dog_cart.jpg",
      description: "Grab a quick and tasty hot dog from the Sketchy Hot Dog Cart."
    },
    {
      name: "Barb's Big Burrito",
      title: "Barb's Big Burrito",
      image: "/images/barbs_big_burrito.jpg",
      description: "Satisfy your hunger with a delicious burrito from Barb's."
    }
  ],
  arcades: [
    {
      name: "Fun City USA",
      title: "Fun City USA",
      image: "/images/fun_city_usa.jpg",
      description: "Enjoy endless arcade games and fun at Fun City USA."
    },
    {
      name: "Game Room",
      title: "Game Room",
      image: "/images/game_room.jpg",
      description: "Play a variety of exciting games in the Game Room."
    },
    {
      name: "Mini Arcade - Sportland",
      title: "Mini Arcade - Sportland",
      image: "/images/mini_arcade_sportland.jpg",
      description: "Challenge yourself with fun games at Mini Arcade - Sportland."
    },
    {
      name: "Mini Arcade - Game Room",
      title: "Mini Arcade - Game Room",
      image: "/images/mini_arcade_game_room.jpg",
      description: "Discover a selection of thrilling games in the Mini Arcade - Game Room."
    }
  ],
  goKarts: [
    {
      name: "Adult Track",
      title: "Adult Track",
      image: "/images/adult_track.jpg",
      description: "Speed around the track on the Adult Go-Karts for a thrilling ride."
    },
    {
      name: "Kiddie Track",
      title: "Kiddie Track",
      image: "/images/kiddie_track.jpg",
      description: "Let the little ones enjoy a safe and fun ride on the Kiddie Go-Karts."
    }
  ],
};

const ParkInfo = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (item, event) => {
    setHoveredItem(item);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="park-info-container">
      <div className="category-card cool-stuff">
        <h3>Cool Stuff</h3>
        <ul>
          {parkInfo.coolStuff.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card thrill-rides">
        <h3>Thrill Rides</h3>
        <ul>
          {parkInfo.thrillRides.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card games">
        <h3>Games</h3>
        <ul>
          {parkInfo.games.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card kiddie-rides">
        <h3>Kiddie Rides</h3>
        <ul>
          {parkInfo.kiddieRides.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card food">
        <h3>Food</h3>
        <ul>
          {parkInfo.food.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="category-card arcades-and-go-karts">
        <h3>Arcades</h3>
        <ul>
          {parkInfo.arcades.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <br />
        <h3>Go Karts</h3>
        <ul className="go-karts">
          {parkInfo.goKarts.map((item, index) => (
            <li
              key={index}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      {hoveredItem && (
        <div
          className="hover-card"
          style={{ top: mousePosition.y, left: mousePosition.x }}
        >
          <h4>{hoveredItem.title}</h4>
          <img src={hoveredItem.image} alt={hoveredItem.title} />
          <p>{hoveredItem.description}</p>
        </div>
      )}
    </div>
  );
};

export default ParkInfo;
