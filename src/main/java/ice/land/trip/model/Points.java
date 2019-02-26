package ice.land.trip.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "points", schema = "public")
public class Points {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "lat", nullable = false)
    private Double lat;

    @Column(name = "lng", nullable = false)
    private Double lng;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "path1", nullable = false)
    private String path1;

    @Column(name = "path2", nullable = false)
    private String path2;

    @Column(name = "path3", nullable = false)
    private String path3;

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public Double getLat() { return lat; }

    public void setLat(Double lat) { this.lat = lat; }

    public Double getLng() { return lng; }

    public void setLng(Double lng) { this.lng = lng; }

    public String getPath1() { return path1; }

    public void setPath1(String path1) { this.path1 = path1; }

    public String getDescription() { return description; }

    public void setDescription(String description) { this.description = description; }

    public String getPath2() { return path2; }

    public void setPath2(String path2) { this.path2 = path2; }

    public String getPath3() { return path3; }

    public void setPath3(String path3) { this.path3 = path3; }
}
