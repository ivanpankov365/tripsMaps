package ice.land.trip.controller;

import ice.land.trip.model.Points;
import ice.land.trip.repository.PhotosRepo;
import ice.land.trip.repository.PointsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class PointsController {

    @Autowired
    private PointsRepo pointsRepo;

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/save", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    void getAllPoints(@RequestBody Points params) {
        pointsRepo.save(params);
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(value = "/getAll", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    List<Points> getAllPoints() {
        return pointsRepo.findAll();
    }
}
