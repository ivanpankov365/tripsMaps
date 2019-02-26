package ice.land.trip.model;

import javax.persistence.*;

@Entity
@Table(name = "photos", schema = "public")
public class Photos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "path", nullable = false)
    private String path;

    public Integer getId() { return id; }

    public void setId(Integer id) { this.id = id; }

    public String getPath() { return path; }

    public void setPath(String path) { this.path = path; }
}
