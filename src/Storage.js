class Storage {
  static getCalorieLimit(defaultLimit = 2000) {
    let calorieLimit;

    if (localStorage.getItem('calorieLimit') === null) {
      calorieLimit = defaultLimit;
    } else {
      calorieLimit = +localStorage.getItem('calorieLimit');
    }
    return calorieLimit;
  }

  static setCalorieLimit(calorieLimit) {
    localStorage.setItem('calorieLimit', calorieLimit);
  }

  static getTotalCalories(defaultTotal = 0) {
    let totalCalories;
    if (localStorage.getItem('totalCalories') === null) {
      totalCalories = defaultTotal;
    } else {
      totalCalories = +localStorage.getItem('totalCalories');
    }
    return totalCalories;
  }

  static updateTotalCalories(totalCalories) {
    localStorage.setItem('totalCalories', totalCalories);
  }

  static getMeals() {
    let meals;
    if (localStorage.getItem('meals') === null) {
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem('meals'));
    }
    return meals;
  }

  static saveMeals(meal) {
    const meals = Storage.getMeals();
    meals.push(meal);
    localStorage.setItem('meals', JSON.stringify(meals));
  }

  static removeMealFromStorage(id) {
    const meals = JSON.parse(localStorage.getItem('meals'));
    const index = meals.findIndex((meal) => meal.id === id);
    if (index !== -1) {
      meals.splice(index, 1);
    }
    localStorage.setItem('meals', JSON.stringify(meals));
    return meals;
  }

  static getWorkout() {
    let workouts;
    if (localStorage.getItem('workouts') === null) {
      workouts = [];
    } else {
      workouts = JSON.parse(localStorage.getItem('workouts'));
    }
    return workouts;
  }

  static saveWorkouts(workout) {
    const workouts = Storage.getWorkout();
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }

  static removeWorkoutFromStorage(id) {
    const workouts = JSON.parse(localStorage.getItem('workouts'));
    const index = workouts.findIndex((workout) => workout.id === id);
    if (index !== -1) {
      workouts.splice(index, 1);
    }
    localStorage.setItem('workouts', JSON.stringify(workouts));
    return workouts;
  }

  static clearStorage() {
    localStorage.removeItem('totalCalories');
    localStorage.removeItem('meals');
    localStorage.removeItem('workouts');

    // If you want to clear all
    // localStorage.clear();
  }
}

export default Storage;
