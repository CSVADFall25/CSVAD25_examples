let cyclingTable, sleepTable;
let cyclingWithSleep = [];

function preload() {
  // Load both CSVs (make sure they’re in the same folder)
  cyclingTable = loadTable('cycling.csv', 'csv', 'header');
  sleepTable = loadTable('sleep.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600, 400);
  noLoop();

  // Parse sleep data into objects with start/end as Date
  let sleepRecords = [];
  for (let r = 0; r < sleepTable.getRowCount(); r++) {
    let startStr = sleepTable.getString(r, 'start');
    let endStr = sleepTable.getString(r, 'end');
    let duration = float(sleepTable.getString(r, 'duration_hrs'));

    let start = new Date(startStr);
    let end = new Date(endStr);
    sleepRecords.push({ start, end, duration });
  }

  // For each cycling entry, find most recent sleep that ended before ride start
  for (let r = 0; r < cyclingTable.getRowCount(); r++) {
    let rideStartStr = cyclingTable.getString(r, 'start');
    let rideEndStr = cyclingTable.getString(r, 'end');
    let rideStart = new Date(rideStartStr);
    let rideEnd = new Date(rideEndStr);
    let duration_km = float(cyclingTable.getString(r, 'distance_km') || 0);

    // Find sleep record ending before ride start
    let matchedSleep = sleepRecords
      .filter(s => s.end < rideStart)
      .sort((a, b) => b.end - a.end)[0]; // most recent before ride

    let sleepDuration = matchedSleep ? matchedSleep.duration : 0;

    cyclingWithSleep.push({
      rideStart,
      rideEnd,
      distance_km: duration_km,
      sleepDuration
    });
  }

  // Display summary
  background(240);
  textSize(14);
  fill(0);
  textAlign(LEFT, TOP);
  text("Ride Start | Distance (km) | Sleep (hrs)", 20, 20);

  for (let i = 0; i < min(10, cyclingWithSleep.length); i++) {
    let c = cyclingWithSleep[i];
    text(
      `${nf(c.rideStart.getMonth()+1,2)}/${nf(c.rideStart.getDate(),2)} | ${c.distance_km.toFixed(1)} km | ${c.sleepDuration.toFixed(2)} hrs`,
      20,
      40 + i * 20
    );
  }

  console.log(cyclingWithSleep);
}
