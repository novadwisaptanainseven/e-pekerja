let status = "";
let estimation = 2 * 24 * 60 * 60 * 1000;
let currentTimestamp = Date.parse(new Date());
let updateKenaikanPangkatTs = Date.parse(new Date(row.updated_at));
let expiredUpdate = estimation + updateKenaikanPangkatTs;

if (currentTimestamp < expiredUpdate) {
  status = "pangkat-updated";
}
