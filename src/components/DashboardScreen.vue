<template>
    <div class="dashboard-wrapper">
        <div class="first-section">
            <div class="recent-proposal">
                <p>
                    Recent proposals
                </p>
                <div>
                  <img class="img" :src="urlOne" alt="userImage" />
                  <img class="img" :src="urlTwo" alt="userImage" />
                  <img class="img" :src="urlThree" alt="userImage" />
                </div>
            </div>
            <div class="info">
				<img class="img" :src="urlTwo" alt="userImage" />
                <p class="name" >Alexandra Smith</p>
                <p class="address"> <icon name="map-marker"></icon> Los Angeles, CA </p>
            </div>
            <div class="events">
                <div class="events-data">
                    <p class="counts">
                        156
                   <p>
                    <p>
                        friends
                    </p>
                </div>
                <div class="events-data">
                    <p class="counts">
                        182
                    <p>
                    <p>
                        events
                    </p>
                </div>
                <div class="events-data">
                    <p class="counts">
                        244
                    <p>
                    <p>
                        checkins
                    </p>
                </div>
            </div>
        </div>
			<transition name="fade-table" appear>
				<div class="second-section" style="overflow:auto;">
					<table class="event-table">
						<thead>
							<tr>
								<th class="image-header" />
								<th class="header-cell">
										Invitations
								</th>
								<th class="header-cell event-header">
										events
								</th>
								<th class="header-cell calendar-header">
										calendar
								</th>
								<th class="header-cell friend-list-header">
										friends
								</th>
								<th class="header-cell">
										<icon name="cog" scale="1.5"></icon>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="image-cell">
									<img class="img" :src="eventOne" alt="eventImage" />
								</td>
								<td class="table-body-cell">
										Party Hall
								</td>
								<td class="table-body-cell event-info-cell">
										<icon name="map-marker"></icon> 1642 N Las Palmas Ave Los Angeles,CA 90028
								</td>
								<td class="table-body-cell calendar-info-cell">
										Fri, June 24
								</td>
								<td class="table-body-cell star">
										<icon name="star"></icon>
								</td>
								<td class="table-body-cell">
										<icon name="check-circle-o" scale="1.5"></icon>
								</td>
							</tr>
							<tr>
								<td class="image-cell">
									<img class="img" :src="eventTwo" alt="eventImage" />
								</td>
								<td class="table-body-cell">
										Music Event
								</td>
								<td class="table-body-cell event-info-cell">
										<icon name="map-marker"></icon> 6555 Hollywood Blvd Hollywood,CA 90028
								</td>
								<td class="table-body-cell calendar-info-cell">
										Sat, June 25
								</td>
								<td class="table-body-cell star">
										<icon name="star"></icon>
								</td>
								<td class="table-body-cell">
										<icon name="check-circle-o" scale="1.5"></icon>
								</td>
							</tr>
							<tr>
								<td class="image-cell">
									<img class="img" :src="eventThree" alt="eventImage" />
								</td>
								<td class="table-body-cell">
										Restaurant
								</td>
								<td class="table-body-cell event-info-cell">
										<icon name="map-marker"></icon> 811 wilshire Blvd Los Angeles,CA 90028
								</td>
								<td class="table-body-cell calendar-info-cell">
										Fri, Jul 26
								</td>
								<td class="table-body-cell star">
										<icon name="star"></icon>
								</td>
								<td class="table-body-cell">
										<icon name="check-circle-o" scale="1.5"></icon>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</transition>
    </div>
</template>

<script>
export default {
  name: 'DashboardScreen',
  data () {
    return {
      show: false,
      urlOne: require('../assets/userOne.jpg'),
      urlTwo: require('../assets/userTwo.jpg'),
      urlThree: require('../assets/userThree.jpeg'),
      eventOne: require('../assets/eventOne.jpg'),
      eventTwo: require('../assets/eventTwo.jpg'),
      eventThree: require('../assets/eventThree.jpeg')
    }
  },
  methods: {
    customAfterAppearHook: function (el) {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
	@import "../style/dashboard.scss"
</style>
