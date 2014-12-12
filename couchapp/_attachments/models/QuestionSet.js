// Generated by CoffeeScript 1.8.0
var QuestionSet, QuestionSetCollection,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

QuestionSet = (function(_super) {
  __extends(QuestionSet, _super);

  function QuestionSet() {
    this.questionStrings = __bind(this.questionStrings, this);
    this.fetchResults = __bind(this.fetchResults, this);
    this.name = __bind(this.name, this);
    return QuestionSet.__super__.constructor.apply(this, arguments);
  }

  QuestionSet.prototype.url = "/question_set";

  QuestionSet.prototype.name = function() {
    return this.id;
  };

  QuestionSet.prototype.fetchResults = function(options) {
    return Gooseberry.view({
      name: "results_by_question_set",
      key: this.id,
      include_docs: false,
      success: function(result) {
        this.results = _.pluck(result.rows, "value");
        return options.success(this.results);
      }
    });
  };

  QuestionSet.prototype.questionStrings = function() {
    return _(this.get("questions")).map(function(questionData) {
      return questionData.name || questionData.text;
    });
  };

  return QuestionSet;

})(Backbone.Model);

QuestionSetCollection = (function(_super) {
  __extends(QuestionSetCollection, _super);

  function QuestionSetCollection() {
    return QuestionSetCollection.__super__.constructor.apply(this, arguments);
  }

  QuestionSetCollection.prototype.model = QuestionSet;

  QuestionSetCollection.prototype.url = "/question_set";

  QuestionSetCollection.prototype.fetch = function(options) {
    if (options == null) {
      options = {};
    }
    options["include_docs"] = true;
    return QuestionSetCollection.__super__.fetch.call(this, options);
  };

  return QuestionSetCollection;

})(Backbone.Collection);

//# sourceMappingURL=QuestionSet.js.map
