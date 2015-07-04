# *makeroute*
### A travel assistant aimed to give you the best roadtrips.

*makeroute* is a web application that utilizes the power of the Google Maps and Yelp APIs to bring you the top-rated travel destinations that you would otherwise just be passing by.


### Dev guidelines

- We want to try to use [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
 - The `master` branch is considered to be "shippable". Each major, "shippable" version of the app is one big push to `master.`
 - Each feature is to be implemented in a branch off of the `dev` branch. So if somebody is working on a feature called `algorithm-v2`, it would be on a branch called `feature/algorithm-v2` created off of the `dev branch`, and once it works on the developer's machine, a pull request will be made against the `dev` branch. Once the code is reviewed by the developers, it will be merged with `dev`.
- We use [virtualenvs](https://virtualenvwrapper.readthedocs.org/en/latest/command_ref.html) and a `requirements.txt` (generated by `$ pip freeze > requirements.txt`) to make sure everyone has the same Python packages as the deployment server without cluttering up our local Python installations.
- Some things we use:
 - [Flask](http://flask.pocoo.org/)
 - Flask's default template engine, [Jinja2](http://jinja.pocoo.org/docs/dev/)
 - [Twitter Bootstrap](http://getbootstrap.com/)
 - [Redis](http://redis.io/topics/data-types-intro)
- Our project is structured like a large Flask app, similar to [this](https://www.digitalocean.com/community/tutorials/how-to-structure-large-flask-applications) tutorial, or this [official one](http://flask.pocoo.org/docs/0.10/patterns/packages/).

#### Links that helped us

- https://www.digitalocean.com/community/tutorials/how-to-structure-large-flask-applications

