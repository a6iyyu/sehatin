package sehatin.repositories;

import java.lang.Integer;
import org.springframework.data.jpa.repository.JpaRepository;
import sehatin.models.ResidentModel;

public interface ResidentRepositories extends JpaRepository<ResidentModel, Integer> {}