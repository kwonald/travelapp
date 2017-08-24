import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class TripDetail extends Component {
  render() {
    const { picture, name, title, location, cost, user } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.first}}
          featured
          title={title}
          caption={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
        />

        <List>
          <ListItem
            title="By"
            rightTitle={user}
            hideChevron
          />
          <ListItem
            title="Country"
            rightTitle={location.country}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Cost"
            rightTitle={cost}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default TripDetail;
