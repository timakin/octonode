// Generated by CoffeeScript 1.9.3
(function() {
  var Milestone;

  Milestone = (function() {
    function Milestone(repo, number, client) {
      this.repo = repo;
      this.number = number;
      this.client = client;
    }

    Milestone.prototype.info = function(cb) {
      return this.client.get("/repos/" + this.repo + "/milestones/" + this.number, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error("Milestone info error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Milestone.prototype.update = function(obj, cb) {
      return this.client.post("/repos/" + this.repo + "/milestones/" + this.number, obj, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 200) {
          return cb(new Error("Milestone update error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    Milestone.prototype["delete"] = function(cb) {
      return this.client.del("/repos/" + this.repo + "/milestones/" + this.number, {}, function(err, s, b, h) {
        if (err) {
          return cb(err);
        }
        if (s !== 204) {
          return cb(new Error("Milestone delete error"));
        } else {
          return cb(null, b, h);
        }
      });
    };

    return Milestone;

  })();

  module.exports = Milestone;

}).call(this);
